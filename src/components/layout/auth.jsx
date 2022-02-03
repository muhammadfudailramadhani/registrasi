export default function Layout({ children }) {
  return (
    <main
      // style={{
      //     backgroundImage:
      //       "url(https://media.istockphoto.com/photos/concept-protection-cyber-security-hands-press-computer-laptop-and-picture-id1180897630)",
      //   }}
      className=""
    >
      <div className="z-0  w-full h-max  bg-no-repeat bg-center bg-orange-700   text-gray-900">
        <div className="w-screen h-full ">
          <div className=" w-screen h-full"></div>
          <div className="relative flex items-center justify-center h-full">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

// {/* <main>
// <div className="" style={{
//   backgroundImage:
//     "url(https://media.istockphoto.com/photos/laptop-computer-desktop-pc-human-hand-office-soft-focus-picture-picture-id811268074?k=20&m=811268074&s=612x612&w=0&h=ZRbtDWXGPi_pZghzHzF4Bzd3DKY8yuzBlWBEwZkHBwQ=)",
// }}>
// <div className="z-10 absolute  flex justify-center">
//   {children}
// </div>
// </div>
// </main> */}

// // style={{
//     //   backgroundImage:
//     //     "url(https://media.istockphoto.com/photos/laptop-computer-desktop-pc-human-hand-office-soft-focus-picture-picture-id811268074?k=20&m=811268074&s=612x612&w=0&h=ZRbtDWXGPi_pZghzHzF4Bzd3DKY8yuzBlWBEwZkHBwQ=)",
//     // // }}
//     className="z-antialiased bg-violet-800 max-h-96 max-w-96 text-gray-500"
