import React from 'react'

export default function POST(req, res) {
  const {createUser} = UserAuth()
  return createUser()
}
