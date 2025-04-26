'use client'

import { createContext, useContext, ReactNode } from 'react'

type User = {
  email: string
  id: string
}

type AuthContextType = {
  user: User | null
  session: null
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  signOut: () => {}
})

export function AuthProvider({ children }: { children: ReactNode }) {
  // For now, we'll use a mock user for demonstration
  const mockUser = {
    email: 'demo@example.com',
    id: '1'
  }

  const signOut = () => {
    // Placeholder for sign out functionality
    console.log('Sign out clicked')
  }

  return (
    <AuthContext.Provider value={{ user: mockUser, session: null, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
