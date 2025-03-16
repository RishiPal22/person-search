// components/user-card.tsx

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail } from 'lucide-react'
import { getUserById } from '../actions/actions'
import DeleteButton from './delete-button'
// import EditButton from './edit-button'
import { UserEditDialog } from './user-edit-dialog'

interface UserCardProps {
  userId: string
}

export default async function UserCard({ userId }: UserCardProps) {
  console.log('Fetching user for UserCard with ID:', userId)

  const user = await getUserById(userId)

  if (!user) {
    console.log('UserCard: No user found for ID:', userId)
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} alt={user.name} />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <Badge variant="secondary" className="w-fit mt-1">ID: {user.id}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span>{user.phoneNumber}</span>
        </div>
        {user.email && (
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <DeleteButton userId={user.id} />
        <UserEditDialog user={user} />
        {/* <EditButton defaultValues={{user.name, user.email}} userId={user.id}/> */}
      </CardFooter>
    </Card>
  )
}
