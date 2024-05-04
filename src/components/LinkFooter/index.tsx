'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";

const LinkFooter = (props: Props) => {

    return (

        <Link className="a" href={props.link}>{props.text}</Link>
    );
};
export default LinkFooter