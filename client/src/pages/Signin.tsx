import {Button, Input} from "../components/Index";

export function Signin() {

return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200 min-w-48 ">
        <div className="bg-white rounded border border-slate-200 flex flex-col p-4 justify-center">
            <label htmlFor="email">Email
            <Input placeholder="email" id="email"  type="email"/>
            </label>
            <label htmlFor="password">Password
            <Input placeholder="password" id="password" type="password" />
            </label>
            <div className="flex justify-center pt-4">
            <Button variant="primary" text="signin" fullWidth={true} loading={true}/>
            </div>

        </div>
    </div>
)}