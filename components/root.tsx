/** @jsx h */
/** @jsxFrag */
import { h, Fragment, JSX, VNode } from "preact"

export default function Root(props: {children?: JSX.Element[]|VNode<any>, header: string}) {
    return (
        <Fragment>
            <title>Oliver's Portfolio</title>
            <div class="header">
                <h1 class="text-center">{props.header}</h1>
            </div>
            <div class="content">
                {props.children}
            </div>
        </Fragment>
    )
}