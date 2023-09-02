
function Header() {
    const url = localStorage.getItem("url");
    const userName = localStorage.getItem("username");
    const name = localStorage.getItem("name");
  return (
    <div>
      <div className="border">
        {/* Header photo */}
        <div className="bg-myBlue h-32 relative"></div>
        <img 
                className=" absolute top-40 border rounded-full w-28 h-28 p-0 mx-3"
                src={""+url} alt="" />

        {/* Info */}
        <div className="mt-16 ml-9 flex flex-col gap-3">
            <div>
                <div className="text-xl font-bold"> {name}</div>
                <div><p className="text-sm">@{userName}</p></div>
            </div>
            <div className="flex gap-2 text-sm pb-4">
                <p><b>122</b> following </p>
                <p><b>102</b> followers </p>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Header;
