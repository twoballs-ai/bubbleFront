import React from 'react';
import { Link, Outlet } from "react-router-dom"


function CreatorPage() {
  return (
    <>


          <section className="col-md-8">
            <Outlet />
          </section>

    </>
  )

}

export default CreatorPage