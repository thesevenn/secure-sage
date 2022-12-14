import React from "react";

import Entry from "./Entry";
import { getAllAccounts } from "../api/accountRequests";

export default function Entries() {
    const [accounts, setAccounts] = React.useState([]);
    const [deleted,setDeleted] = React.useState(0);

    React.useEffect(() => {
        getAllAccounts().then(res => setAccounts(res.data)).catch(err => console.log(err));
    }, [deleted]);

    function counterDelete(){
setDeleted(prev=>prev+1);
    }

    return (
        <React.Fragment>
            <section className="all-accounts-section">
                <h1 className="all-accounts__title">Your Accounts</h1>
                <div className="account-container__card">
                { 
                    accounts.map((account, index) => {
                        if(account)
                        return <Entry account={account} key={index} counterDelete={counterDelete} />

                        return <p>Nothing to see here. Add some accounts</p>
                    })
                }
                </div>
            </section>
        </React.Fragment>
    )
}