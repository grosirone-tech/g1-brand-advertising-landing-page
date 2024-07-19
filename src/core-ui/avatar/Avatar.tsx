import "./avatar.css"
import React, { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    children?: ReactNode;
}

export function Avatar (props: Props){
    let {icon, children} = props;

    return (
        <div className="avatars">
            {icon && <span className="avatar">{icon}</span>}
            {children}
        </div>
    );
}