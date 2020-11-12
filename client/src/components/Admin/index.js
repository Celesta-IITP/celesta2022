import React from 'react'

import CALeaderboard from "./CALeaderboard"
import UpdateCAPoints from "./UpdateCAPoints"
import ExamplesNavbar from "../Navbars/IndexNavbar.js";
import Footer from "..//Footer/Footer.js";

const Admin = () => {
    return (
        <div>
            <ExamplesNavbar />
            <UpdateCAPoints />
            <CALeaderboard />
            <Footer />
        </div>
    )
}

export default Admin