import React from 'react';
import { Link, Outlet } from "react-router-dom"


function DashMain() {
  return (
    <>


          <section className="col-md-8">
            <Outlet />
          </section>

    </>
  )

}

export default DashMain