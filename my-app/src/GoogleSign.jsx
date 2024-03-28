import React from "react";
import './top.css';


import {useSession, useSupabaseClient, useSessionContext} from "@supabase/auth-helpers-react"
import { useEffect } from "react";

const Work =()=>{
    const today=new Date()

    function StartTimeCalculation(startTime){
        const actualTime=new Date()
        const hours=startTime.split(":")
        actualTime.setHours(hours[0],hours[1]);

        return actualTime;
    }

    function EndTime(actualTime, adding){
        adding=parseInt(adding)
        const endTime=new Date(actualTime.getTime()+(adding*60000))

        return endTime
    }
   

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
          const tasks = JSON.parse(storedTasks);
            console.log("The first one", tasks);


         
        }
      }, []);
    


    const session= useSession();
    const supabase= useSupabaseClient();
    const { isLoading }=useSessionContext()

    if(isLoading){
        return <></>
    }
    async function createCalendarEvent(){
        const storedTasks=localStorage.getItem("tasks");
        if(!storedTasks){
            alert("There Are No Tasks Added")
            return;
        }
        const tasks=JSON.parse(storedTasks);
        if (!tasks || !tasks[0] || !tasks[0].taskName) {
            alert("There Are No Tasks Added");
            return;
        }

        const firstTask=tasks[0]
        const startTime=StartTimeCalculation(firstTask.startTime)
        const endTime=EndTime(startTime, firstTask.length)

        console.log("THE START OF THE THING IS: "+ startTime)
        console.log("THE END OF THE THING IS: "+ endTime);




        console.log("Creating Calendar Event ")
        const event ={
            "summary": firstTask.taskName,
            "description": "-From Daily Productivity App",
            'start':{
                'dateTime': startTime.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end':{
                'dateTime': endTime.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        }
        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events",{
            method: "POST",
            headers:{
                'Authorization':'Bearer ' + session.provider_token
            },
            body: JSON.stringify(event)
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            console.log(data);
            alert("Event Created, Check Your Google Calendar")
        })
    }
    async function googleSignIn(){
        const {error}=await supabase.auth.signInWithOAuth({
            provider: 'google',
            options:{
                scopes: "https://www.googleapis.com/auth/calendar"
            }
        })
        if(error){
            alert("Error Logging in Google Provider With Supabase")
            console.log(error)
        }
    }

    async function signOut(){
        await supabase.auth.signOut()
    }
    console.log(session)
    return(
            <div className="working" style={{width: "100px"}}>{
                session?
                <>
                    <h2 className="greetings">Hey there {session.user.email}</h2>
                    <button className="signout" onClick={()=>signOut()}>Sign out</button>
                    <button className="addevnts" onClick={()=>createCalendarEvent()}>Add All Events To Google Calendar</button>
                </>
                :
                <>
                    <button className="signin" onClick={()=>googleSignIn()}>Sign in With Google</button>
                </>
            }

            </div>

        
    )
}

export default Work