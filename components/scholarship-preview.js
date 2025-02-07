import Link  from "next/link";
function ScholarshipPreview({ possibleDeadline, Title, Info, Odate, Cdate}) {

    return (
            <div className="scholar-box">
                <div className="deadline-box">
                    <h3 className="deadline-text">{possibleDeadline}</h3>
                </div>
                <div className="title-box">
                    <h2 className="scholar-title">{Title}</h2>
                </div>
                <div className="Scholar-info-box">
                    <p className="Scholar-info-text">{Info}</p>
                    <div>
                        <hr className="Line"></hr>
                        <div className="Sdates">
                            <h3 className="Bolder">Open Date</h3>
                            <h4 className="Bolder">{Odate}</h4>
                        </div>
                        <div className="Sdates">
                            <h3 className="Bolder">Close Date</h3>
                            <h4 className="Bolder">{Cdate}</h4>
                        </div>
                        <div className="Apply-box">
                            <Link href="/scholarships/specificS" className="Apply">
                                <button>Apply</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ScholarshipPreview;