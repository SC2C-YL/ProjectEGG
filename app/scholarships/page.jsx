"use client"

import Nav from "../../components/nav";
import './scholarship.css';
import FButton from "../../components/filter-grid-button";
import ScholarshipPreview from "../../components/scholarship-preview";
import { UserAuth } from "@/context/userContext";
function scholarships() {
    const {user} = UserAuth();
    console.log(user)
    return(
        <div>
            <Nav />
            <div className="H1-Div">
                <h1>Scholarships</h1>
            </div>
            <div className="filter-gird">
                <FButton filter="Location"/>
                <FButton filter="GPA"/>
                <FButton filter="No Essay"/>
                <FButton filter="Essay"/>
            </div>
            <div className="scholars-boxes">
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholaip" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            <ScholarshipPreview possibleDeadline = "Deadline Soon" Info="Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah" Title="Scholarship" Odate="##/##/###" Cdate="##/##/###"/>
            
        </div>
        </div>
    )
}

export default scholarships;