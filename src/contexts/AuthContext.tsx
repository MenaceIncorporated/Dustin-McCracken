'use client'

import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  user: null
  session: null
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const signOut = async () => {
    // Placeholder for future auth implementation
  }

  return (
    <AuthContext.Provider value={{ user: null, session: null, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
