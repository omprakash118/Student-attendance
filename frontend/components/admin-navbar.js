const navBar = document.getElementById("admin-sidebar");

navBar.innerHTML = `
    <nav class="flex-col text-[#8e9baa]">
        <div class="logo text-center p-3  text-3xl border-b rounded-2xl shadow-2xl shadow-black  ">
          <i class="fa-solid fa-graduation-cap"></i>
          <span class ="logoName">MLSU</span>
        </div>

        <div class="myMenu mt-8 ">
          <ul class=" flex-col rounded-2xl text-xl">
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl  shadow-black  hover:shadow-2xl hover:text-white active:bg-[#415a77] ">
              <div class="hidden">
                <i class="fa-solid fa-gauge"></i>
              </div>
              <a href="" class="block btnHidden">Dashboard</a>
            </li>

            <li class=" pt-7 pb-3 pl-1.5 text-[#737b85] labeled">Managment</li>

            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] block relative dropdownContainer">
              <div class="hidden">
                <i class="fa-solid fa-person-chalkboard"></i>
              </div>
              <button class="flex justify-between items-center container cursor-pointer dropdownBtn transition-all duration-500 btnHidden" >
              <span>Manage Teacher</span>
              <i class="fa-solid fa-angle-left left-arrow transition-transform duration-400" ></i>
              </button>
          
              <div class="mt-4 hidden dropdownMenu transition-all duration-500" >
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      
                      <i class="fa-solid fa-list text-xl pr-3.5"></i>
                      <span>Teacher List</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      
                      <i class="fa-solid fa-user-plus  pr-3.5 text-xl"></i> 
                      <span>Add Teacher</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-minus pr-3.5  text-xl"></i>
                      <span>Remove Teacher</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] block relative dropdownContainer">
              <div class="hidden">
                <i class="fa-solid fa-users"></i>
              </div>
              <button class="flex justify-between items-center container cursor-pointer dropdownBtn transition-all duration-500 btnHidden"  >
              <span>Manage Student</span>
              <i class="fa-solid fa-angle-left left-arrow transition-transform duration-400"></i>
              </button>
              <div class="mt-4 hidden dropdownMenu transition-all duration-500" >
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                       <i class="fa-solid fa-list text-xl pr-3.5"></i>
                      <span>Student List</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-plus  pr-3.5 text-xl"></i>
                      <span>Add student</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                       <i class="fa-solid fa-user-minus pr-3.5  text-xl"></i>
                      <span>Remove student</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>  
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] block relative dropdownContainer">
              <div class="hidden">
                <i class="fa-solid fa-chalkboard"></i>
              </div>
              <button class="flex justify-between items-center container cursor-pointer dropdownBtn transition-all duration-500 btnHidden"  >
              <span>Manage Classes</span>
              <i class="fa-solid fa-angle-left left-arrow transition-transform duration-400"></i>
              </button>
              <div class="mt-4 hidden dropdownMenu transition-all duration-500" >
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-list text-xl pr-3.5"></i>
                      <span>Class list</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-plus  pr-3.5 text-xl"></i> 
                      <span>Add class</span>
                    </a>
                    </li>
                    <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-minus pr-3.5  text-xl"></i>
                      <span>Remove class</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>  

            
           
            <li class="text-[#737b85] pt-7 pb-3 pl-1.5 labeled">Notification</li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:text-white  hover:shadow-2xl shadow-black active:bg-[#415a77]">
              <div class="hidden">
                <i class="fa-solid fa-bell"></i>
              </div>
              <a href="" class="block btnHidden">Notice</a>
            </li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <div class="hidden">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <a href="" class="block btnHidden">Message</a>
            </li>
            
            <li class="text-[#737b85] pt-7 pb-3 pl-1.5 labeled">Personal</li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <div class="hidden">
                <i class="fa-solid fa-gear"></i>
              </div>
              <a href="" class="block btnHidden">Setting</a>
            </li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl   hover:shadow-2xl shadow-black2 hover:text-red-500 active:bg-[#415a77]">
              <div class="hidden">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              <a href="" class="block btnHidden">Logout</a>
            </li>

          </ul>
        </div>
      </nav>
`

