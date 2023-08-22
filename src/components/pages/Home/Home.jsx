import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Carousel from "react-bootstrap/Carousel";
// import { apiUrl } from "../../../shared/config";

function Home() {
    // const [allCourseData, setAllCourseData] = useState([]);
    // const [popularCourseData, setPopularCourseData] = useState([]);
    // const [popularTeacherData, setPopularTeacherData] = useState([]);
    // const [studentTestimonialData, setStudentTestimonialData] = useState([]);
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };
    // const teacherId = localStorage.getItem("teacherId");
    // // console.log(teacherId)
    // useEffect(() => {
    //     axios
    //         .get(
    //             apiUrl + "course/?result=4"
    //             // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
    //             // ,{headers: { "Content-Type": "multipart/form-data" }}
    //         )
    //         .then((response) => {
    //             setAllCourseData(response.data.results);
    //             console.log(response.data);
    //         });
    //     try {
    //         axios
    //             .get(
    //                 apiUrl + "popular-courses/?popular=1"
    //                 // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
    //                 // ,{headers: { "Content-Type": "multipart/form-data" }}
    //             )
    //             .then((response) => {
    //                 setPopularCourseData(response.data);
    //                 console.log(response.data);
    //             });
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     try {
    //         axios
    //             .get(
    //                 apiUrl + "popular-teachers/?popular=1"
    //                 // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
    //                 // ,{headers: { "Content-Type": "multipart/form-data" }}
    //             )
    //             .then((response) => {
    //                 setPopularTeacherData(response.data);
    //                 console.log(response.data);
    //             });
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     try {
    //         axios
    //             .get(
    //                 apiUrl + "student-testimonial/"
    //                 // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
    //                 // ,{headers: { "Content-Type": "multipart/form-data" }}
    //             )
    //             .then((response) => {
    //                 setStudentTestimonialData(response.data);
    //                 console.log(response.data);
    //             });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);
    // console.log(popularCourseData);
    return (
        <>

            <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">Перейти на страницу менеджера</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary" to={`/editor/edit`}>К странице редактора</Link>
                    <Link className="btn btn-primary" to={`/editor/view`}>К странице просмотра редактора</Link>
                </div>
            </div>
            <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default Home;
