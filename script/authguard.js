/**
 * Name: Vishwa Patel, Hifza Hameed
 * Group: Group-4
 * Student id: 100851337, 100833037
 * File: authguard.js
 *  */
"use strict";
(function ()
{
    if(!sessionStorage.getItem("user"))
    {
        location.href="login.html";
    }
})();