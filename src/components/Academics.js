import React from "react"
import { Container } from "react-bootstrap";
import AcademicsContainer from "./Academics_Container";
import "../styles/Academics.css";

import fhir_img from "../assets/images/aca_fhir.png";
import plasma_img from "../assets/images/aca_plasmajet.png";
import hyperloglog_img from "../assets/images/aca_hyperloglog.png";
import gedcom_img from "../assets/images/aca_gedcom.png"

import bachelorThesis from "../assets/studies/Bachelorarbeit_MariusMueller.pdf";
import projectPlasma from "../assets/studies/Projektarbeit_MariusMueller.pdf";




function Academics() {
    return (
        <div className="academics" id="studies">
            <Container  >
                <h1>My Studies</h1>
                <span className="line-long"></span>

                {/** BACHELOR THESIS: FHIR */}
                <AcademicsContainer
                    img={fhir_img}
                    imgAlt={"Bachelor-Thesis Image"}
                    imgLeft={true}
                    title={"FHIR in Digital Health Applications"}
                    subtitle={"Automated Collection, Storage and Retrieval of Vital Signs on a FHIR Test Server"}
                    p1={"My Bachelor Thesis entitled deals with the use of the international data standard FHIR® for the communication of vital parameters. To this end, the development of standards and terminologies in the healthcare sector with a particular focus on FHIR is scientifically elaborated."}
                    p2={"In order to demonstrate the use of FHIR, a prototype software system was created with which the vital parameters recorded with consumer devices can be transferred to a Raspberry Pi 3B+ and converted to FHIR format using the open-source communication server Mirth Connect. The FHIR resources created in this way are loaded to a FHIR Test-Server. With the web-application “GetFHIRData” created as part of this work, the measurement results can be accessed and visualized."}
                    isFinished={true}
                    pdf={bachelorThesis}
                    repoLink={null}
                />
                <span className="line-long"></span>

                {/** PROJEKTARBEIT: PLASMAJET */}
                <AcademicsContainer
                    img={plasma_img}
                    imgAlt={"Projectwork Image"}
                    imgLeft={false}
                    title={"Electrode configurations for Plasma jets"}
                    subtitle={"An introduction to the state of the art and the development of a prototype"}
                    p1={"This work serves as a preparation for the development of a plasma jet for medical applications. In order to understand the sometimes highly complex processes involved in technical plasma production, the reader was given an introduction to the chemical and physical basics. It was shown that the choice of the correct electrode configuration is essential for the success of the developed plasma kit, as it significantly influences the type, shape and temperature of the generated plasma."}
                    p2={"In order to support the successful development of a plasma jets, several already established plasma jets were analyzed and summarized in tabular form. Thus, the reader was given an overview of the various possibilities of realizing an electrode system and at the same time pointed out the current state of the art, which offers guidance during the development phase."}
                    isFinished={true}
                    pdf={projectPlasma}
                    repoLink={null}
                />
                <span className="line-long"></span>

                {/** SEMINARARBEIT: HYPERLOGLOG */}
                <AcademicsContainer
                    img={hyperloglog_img}
                    imgAlt={"Seminarwork Image"}
                    imgLeft={true}
                    title={"Solving The Count-Distinc Problem with HyperLogLog"}
                    subtitle={"An in-depth Analysis of the Cardinality-Estimation-Algorithm HyperLogLog"}
                    p1={"HyperLogLog is an algorithm for the count-distinct problem, approximating the number of distinct elements in a multiset. Calculating the exact cardinality of the distinct elements of a multiset requires an amount of memory proportional to the cardinality, which is impractical for very large data sets."}
                    p2={"Probabilistic cardinality estimators, such as the HyperLogLog algorithm, use significantly less memory than this, at the cost of obtaining only an approximation of the cardinality. The HyperLogLog algorithm is able to estimate cardinalities of 10^9 with a typical accuracy (standard error) of 2%, using 1.5 kB of memory."}
                    isFinished={false}
                    pdf={null}
                    repoLink={null}
                />
                <span className="line-long"></span>

                {/** TEAMPROJEKT: GEDCOM */}
                <AcademicsContainer
                    img={gedcom_img}
                    imgAlt={"Projectwork Image"}
                    imgLeft={false}
                    title={"Gedcom.js"}
                    subtitle={"Development of a JavaScript Library for FamilySearch GEDCOM v7"}
                    p1={"FamilySearch GEDCOM is a de-facto standard open file format specification to store genealogical data, and import or export it between compatible genealogy software."}
                    p2={"Gedcom.js is a JavaScript library that assists the user in reading, writing, and syntax checking Gedcom files. With the generic grammar generator, the syntax can be extended to support additional tags, so software developers can adapt the parser to the needs of their systems."}
                    isFinished={false}
                    pdf={projectPlasma}
                    repoLink={"https://github.com/DwieDave/gedcom.js"}
                />
            </Container>
        </div>
    );
}

export default Academics