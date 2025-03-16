'use server'

import { supabase } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'
import { User } from './schemas'
// import crypto from 'crypto';


// const users: User[] = [
//     { id: '1', name: 'John Doe', phoneNumber: '0412345678', email: 'john@example.com' },
//     { id: '2', name: 'Jane Smith', phoneNumber: '0423456789', email: 'jane@example.com' },
//     { id: '3', name: 'Alice Johnson', phoneNumber: '0434567890', email: 'alice@example.com' },
//     { id: '4', name: 'Bob Williams', phoneNumber: '0445678901', email: 'bob@example.com' },
//     { id: '5', name: 'Charlie Brown', phoneNumber: '0456789012', email: 'charlie@example.com' },
//     { id: '6', name: 'Emily Davis', phoneNumber: '0467890123', email: 'emily@example.com' },
//     { id: '7', name: 'Frank Miller', phoneNumber: '0478901234', email: 'frank@example.com' },
//     { id: '8', name: 'Grace Lee', phoneNumber: '0489012345', email: 'grace@example.com' },
//     { id: '9', name: 'Henry Moore', phoneNumber: '0490123456', email: 'henry@example.com' },
//     { id: '10', name: 'Isabella Young', phoneNumber: '0401234567', email: 'isabella@example.com' },
// ]

// export async function searchUsers(query: string): Promise<User[]> {
//     console.log('Searching users with query:', query)
//     return users.filter(user => user.name.toLowerCase().startsWith(query.toLowerCase()))
// }

// export async function addUser(data: Omit<User, 'id'>): Promise<User> {
//     const newId = crypto.randomUUID();
//     const newUser = { ...data, id: newId }
//     const validatedUser = userSchema.parse(newUser)
//     users.push(validatedUser)
//     return validatedUser
// }

// export async function deleteUser(id: string): Promise<void> {
//     const index = users.findIndex(user => user.id === id)
//     if (index === -1) {
//         throw new Error(`User with id ${id} not found`)
//     }
//     users.splice(index, 1)
//     console.log(`User with id ${id} has been deleted.`)
//     revalidatePath('/')
// }

// export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
//     const index = users.findIndex(user => user.id === id)
//     if (index === -1) {
//         throw new Error(`User with id ${id} not found`)
//     }

//     const existingUser = users[index]
//     const updatedUser = { ...existingUser, ...data }
//     const validatedUser = userSchema.parse(updatedUser) // Ensure the updated data adheres to schema

//     users[index] = validatedUser
//     console.log(`User with id ${id} has been updated.`)
//     revalidatePath('/')

//     return validatedUser
// }


// export async function getUserById(id: string): Promise<User | null> {
//     return users.find(user => user.id === id) || null
// }

export async function searchUsers(query: string): Promise<User[]> {
    console.log('Searching users with query:', query)

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .ilike("name", `${query}%`)  // Case-insensitive search

    if (error) {
        console.error("Error searching users:", error.message)
        return []
    }

    return data as User[]
}

// Add a new user to Supabase
export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    const { data: insertedUser, error } = await supabase
        .from("users")
        .insert([{ ...data }])
        .select()
        .single()

    if (error) {
        console.error("Error adding user:", error.message)
        throw new Error(error.message)
    }

    revalidatePath('/')
    return insertedUser as User
}

// Delete a user from Supabase
export async function deleteUser(id: string): Promise<void> {
    const { error } = await supabase
        .from("users")
        .delete()
        .eq("id", id)

    if (error) {
        console.error(`Error deleting user with id ${id}:`, error.message)
        throw new Error(error.message)
    }

    console.log(`User with id ${id} has been deleted.`)
    revalidatePath('/')
}

// Update user details in Supabase
export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    const { data: updatedUser, error } = await supabase
        .from("users")
        .update(data)
        .eq("id", id)
        .select()
        .single()

    if (error) {
        console.error(`Error updating user with id ${id}:`, error.message)
        throw new Error(error.message)
    }

    console.log(`User with id ${id} has been updated.`)
    revalidatePath('/')
    return updatedUser as User
}

// Get user by ID
export async function getUserById(id: string): Promise<User | null> {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        console.error(`Error fetching user with id ${id}:`, error.message)
        return null
    }

    return data as User
}