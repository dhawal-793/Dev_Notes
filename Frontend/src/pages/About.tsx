import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


const messages = [
  `DevNotes is a cloud based Notes app build to store user's notes anytime, anywhere on the cloud with easy access to their notes.`,
  `The App is build using the popular technologies like React JS MongoDB, Express Js and NodeJS.`,
  `Tailwind is Used as the CSS Framework for styling the App.`,
  `shadcn-ui is used as the component library for the App with radix-ui.`,
  `The App is completely TypeSafe with Typescript.`,
  `ALl the forms are completely typeSafe with ZOD and react-hook-form.`,
  `Vite JS is used as the bundler`,
  `For fetching the notes of the logged in user Custom Express APIs are used.`,
]

const features = [
  `The app uses Express Api to fetch all the data.`,
  ` MongoDb is used as the database to save and fetch all the
  data.`,
  `The user can create read update and delete notes on the app.`,
  `The app uses function based react components.`,
  `It is completely Device Responsive and accessibilty optimized`,

]

const About = () => {
  return (
    <div className="container py-10">
      <Heading title="DevNotes" description="Your Notes Secured on the Cloud" className="text-center" />
      <Separator className="mt-5 mb-8" />
      <ul className="flex flex-col max-w-4xl gap-3 mx-auto list-[square]">
        {messages.map((message, i) => (
          <li key={i} className="text-lg font-semibold tracking-wider">{message}</li>
        ))}

        <li className="text-lg font-semibold tracking-wider">
          Some Features of DevNotes
          <ul className="flex flex-col gap-2 px-5 py-3 text-base list-disc">
            {features.map((feature, i) => (
              <li key={i} className="text-lg font-semibold tracking-wider">{feature}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;