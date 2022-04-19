import React from "react";
import passport from './../me.png'

function Headlike() {
    return (
        <header>
            <img src={passport} alt="john adebayo" />
            <div class="profile">
                <h4 class="">PROFILE</h4>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus qui, unde
                    aliquid eveniet perferendis eos culpa earum aliquam distinctio, molestiae nesciunt fugit et.
                    Necessitatibus ullam porro laboriosam iure mollitia?</p>
                <p class="text">I love playing footballs</p>
            </div>
        </header>
    );

}

export default Headlike