import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState, User } from '@/types'

// Mock users for authentication
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Administrator',
    email: 'admin@shoreagents.com',
    role: 'admin',
    avatar: 'AD',
    username: 'admin'
  },
  {
    id: '2',
    name: 'IT Staff',
    email: 'itstaff@shoreagents.com',
    role: 'it',
    avatar: 'IT',
    username: 'itstaff'
  },
  {
    id: '3',
    name: 'Staff Member',
    email: 'staff@shoreagents.com',
    role: 'staff',
    avatar: 'ST',
    username: 'staff'
  },
  {
    id: '4',
    name: 'Nurse',
    email: 'nurse@shoreagents.com',
    role: 'nurse',
    avatar: 'NU',
    username: 'nurse'
  }
]

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (username: string, password: string) => {
        // Simple mock authentication
        const user = mockUsers.find(u => u.username === username)
        
        // Check for specific passwords for each user
        const validCredentials = [
          { username: 'admin', password: 'admin123' },
          { username: 'itstaff', password: 'it123' },
          { username: 'staff', password: 'staff123' },
          { username: 'nurse', password: 'nurse123' }
        ]
        
        const validCredential = validCredentials.find(
          c => c.username === username && c.password === password
        )
        
        if (user && validCredential) {
          set({ user, isAuthenticated: true })
          return true
        }
        
        return false
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false })
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
) 