'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input } 
#!/usr/bin/env bash
set -e

# 1. Install TailwindCSS & PostCSS deps
npm install -D tailwindcss postcss autoprefixer

# 2. Initialize Tailwind
npx tailwindcss init -p

# 3. Create stub components
mkdir -p src/components/layout src/components/features

cat > src/components/layout/Header.tsx << 'EOF'
'use client'
import React from 'react';

export default function Header() {
  return <header className="bg-white p-4 shadow">Header</header>;
}
EOF

cat > src/components/features/ContactForm.tsx << 'EOF'
'use client'
import React from 'react';

export default function ContactForm() {
  return (
    <form className="space-y-4">
      {/* TODO: Add form fields */}
    </form>
  );
}
EOF

cat > src/components/features/TeamInfo.tsx << 'EOF'
'use client'
import React from 'react';

export default function TeamInfo() {
  return <section>{/* TODO: Team information */}</section>;
}
EOF

# 4. Commit & push
git add tailwind.config.js postcss.config.js package.json package-lock.json src/components/layout/Header.tsx src/components/features/ContactForm.tsx src/components/features/TeamInfo.tsx
git commit -m "chore: add TailwindCSS deps and stub components for missing imports"
git push origin main

echo "✅ TailwindCSS installed and stubs created. Please redeploy main with cache cleared."