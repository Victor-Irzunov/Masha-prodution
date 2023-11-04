import { useLocation, Navigate } from "react-router-dom"
import React, { useContext } from 'react'
import { Context } from "../App"

const RequireAuth = ({ children }) => {
	const location = useLocation()
	const { user } = useContext(Context)


	if (user.userData.role !== "ADMIN") {
		return <Navigate to='/false/auth' state={{from : location}} />
	}

	return children
}

export default RequireAuth