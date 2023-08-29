const About = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN
  return (
    <div className="text-white card bg-custom">
      <div className="card-body">
        <h3 className="py-2 text-center card-title">DevNotes</h3>
        <hr />
        <ul style={{ listStyleType: "square" }}>
          <li>
            <h5>
              DevNotes is a cloud based Notes app build to store user's notes
              anytime, anywhere on the cloud with easy access to their
              notes.
            </h5>
          </li>
          <li>
            <h5>
              The App is build using the latet technologies like MERN Stack.
            </h5>
          </li>
          <li>
            <h5>
              Tailwind is Used as the CSS Framework for styling the App.
            </h5>
          </li>
          <li>
            <h5>
              For fetching the notes of the logged in user Custom Express
              APIs are used.
            </h5>
          </li>
          <li>
            <h5>Some Features of DevNotes &rarr;</h5>
            <ul>
              <li>The app uses Express Api to fetch all the data.</li>
              <li>
                MongoDb is used as the database to save and fetch all the
                data.
              </li>
              <li>
                The user can create read update and delete notes on the app.
              </li>
              <li>
                The user can only access his/her own notes, no-one else can
                see other user's notes, thus the app is secured.
              </li>
              {/* <li>
                  The user can also search their notes using the tag assigned
                  to each note.
                </li> */}
              <li>The app uses function based react components.</li>
              {/* <li>
                    Some features like Top Loading Bar and Infinite Scroll are
                    also Included.
                  </li> */}
              <li>It is completely Device Responsive</li>
              <li>All the Rights are reserved by DevNotes. </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default About;