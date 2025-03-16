'use client'
import React, { Suspense, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { searchUsers } from '@/app/actions/actions'
import UserCard from './user-card'
import { User } from '@/app/actions/schemas'

interface Option {
  value: string
  label: string
  user: User
}

export default function UserSearch() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

  const loadOptions = async (inputValue: string): Promise<Option[]> => {
    const users = await searchUsers(inputValue)
    return users.map(user => ({ value: user.id, label: user.name, user }))
  }

  const handleChange = (option: Option | null) => {
    setSelectedUserId(option ? option.value : null)
  }

  useEffect(() => {
    console.log('Selected user ID changed:', selectedUserId)
  }, [selectedUserId])

  return (
    <div className="space-y-6">
      <AsyncSelect
        cacheOptions={false}
        loadOptions={loadOptions}
        onChange={handleChange}
        placeholder="Search for a user..."
        className="w-full max-w-md mx-auto"
      />
      {selectedUserId && (
        <Suspense fallback={<p>Loading user...</p>}>
          <UserCard userId={selectedUserId} />
        </Suspense>
      )}
    </div>
  )
}
