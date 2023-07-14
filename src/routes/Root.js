import { 
    Outlet,
    Link,
    NavLink,
    useLoaderData,
    Form,
    useNavigation,
    redirect,
    useSubmit
} from "react-router-dom";

import { getContacts,createContact } from "../contact";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts,q };
}

export async function action() {
    console.log('action executed');
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
    //return { contact };
}  

export default function Root() {
    console.log('Root Render');
    console.log('call use loader data');

    const { contacts,q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  const ContactMenuItem = ({contact}) => {
    return(
      <li key={contact.id}>
        <NavLink to={`contacts/${contact.id}`}
                 className={({ isActive, isPending }) =>
                 isActive
                   ? "active"
                   : isPending
                   ? "pending"
                   : ""
               }>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          {contact.favorite && <span>★</span>}
        </NavLink>
      </li>);
  }

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                className={searching ? "loading" : ""}
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
              }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <ContactMenuItem  key={contact.id} 
                                  contact={contact}/>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail" 
              className={
                navigation.state === "loading" ? "loading" : ""
              }>
            Detail Container
            <Outlet/>
        </div>
      </>
    );
  }