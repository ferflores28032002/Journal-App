import { Route, Routes } from "react-router-dom"
import { JournalRoutes } from "../journal/Routes/JournalRoutes"
import {AuthRoutes} from '../Auth/Routes/AuthRoutes'

export const AppRouters = () => {

    return (
    <Routes>
      {/* Login y register */}

      <Route path="/auth/*" element={<AuthRoutes/>} />


      <Route path="/*" element={<JournalRoutes/>} />

    </Routes>
  )
}
