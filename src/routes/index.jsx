import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import Loader from "../components/atoms/loader"

const Learn = lazy(() => import("../pages/learn"))
const Article = lazy(() => import("../pages/article"))
const Quiz = lazy(() => import("../pages/quiz"))
const Practice = lazy(() => import("../pages/practice"))
const ProtectedRoute = lazy(() => import("../components/molecules/protectedRoute"))
const Score = lazy(() => import("../pages/score"))
const Home = lazy(() => import("../pages/home"))
const Profile = lazy(() => import("../pages/profile"))
export default function Router() {
   return (
      <main className="bg-blue-4000 w-full pb-20 md:w-7/12">
         <Routes>
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Home />
                  </Suspense>
               }
               path="/"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <ProtectedRoute>
                        <Profile />
                     </ProtectedRoute>
                  </Suspense>
               }
               path="/profile"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Learn />
                  </Suspense>
               }
               path="/learn"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Score />
                  </Suspense>
               }
               path="/score"
            />

            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Article />
                  </Suspense>
               }
               path="/article/:id"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <ProtectedRoute>
                        <Quiz />
                     </ProtectedRoute>
                  </Suspense>
               }
               path="/quiz/:id"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <ProtectedRoute>
                        <Practice />
                     </ProtectedRoute>
                  </Suspense>
               }
               path="/practice"
            />
         </Routes>
      </main>
   )
}
