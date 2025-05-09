import Header from "./components/Header";
import Work from "./components/Work"
import Experience from "./components/Experience";

const Page = () => {
    return (
        <main className="bg-gray-50 h-full min-h-screen relative">
            <div className="px-5 md:px-0 mx-auto w-4xl font-noto-sans text-gray-800">
                <Header />
                <Work />
                <Experience />
             </div>
        </main>
    )
} 
export default Page;