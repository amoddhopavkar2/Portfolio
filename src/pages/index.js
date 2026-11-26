import * as React from "react"

import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import Switch from "../components/switch/switch";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll";

const IndexPage = () => (
  <>
    <Scroll />
    <Switch />
    <Intro />
    <Background />
    <Skills />
    <Experience />
    <Projects />
    <Footer />
  </>
)

// Gatsby's Head API puts these tags in <head>, where link-preview crawlers like LinkedIn look for them.
export const Head = () => <Seo />

export default IndexPage
