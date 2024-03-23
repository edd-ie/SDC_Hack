import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import './Dashboard.css'




export default function Dashboard() {
    const [data, setData] = useState([])

    const dataset = [
        {
            "name": "Agriculture",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Aviation",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Commercial",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Energy",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Forestry",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Industrial",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Marine",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        },
        {
            "name": "Residential",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        },
        {
            "name": "Transportation",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        },
        {
            "name": "Waste",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    useEffect(() => {
        setData(dataset)
    },[])




    return (
    <div className="Dashboard">
        <div className="folder">
            <AreaChart width={700} height={250} data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
        
    </div>
  ); 
}
