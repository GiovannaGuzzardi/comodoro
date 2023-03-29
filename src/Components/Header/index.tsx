import { Alien, Lightning, Scroll, Timer } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import { Button } from "../../Lib/Button"

export const Header = () => {
    return (
        <div className="flex justify-between">
            <div className=" flex text-[1.5rem] text-center items-center">
                <Alien size={30} color={`white`} weight="bold" />
                <h1 className="pl-2 max-sm:hidden">Alien Focus</h1>
            </div>
            <div className="flex">
                <Button text={<Lightning size={25} color="#ffffff" weight="bold" />} styleText=" text-sm font-bold" styleButton="rounded-full p-2 hover:bg-primary-600 mx-1" />
                <NavLink to="/history" className="Button w-[3rem] flex items-center justify-center mx-1 hover:bg-primary-600  rounded-full">
                    <Scroll size={20} color="#ffffff" weight="bold" />
                </NavLink>
                <NavLink to="/" className="Button w-[3rem] flex items-center justify-center mx-1 hover:bg-primary-600 rounded-full">
                    <Timer size={20} color="#ffffff" weight="bold" />
                </NavLink>
            </div>
        </div>
    )
}