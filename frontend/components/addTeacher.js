const teacherAdding = document.getElementById('addTeacher');

teacherAdding.innerHTML = `
    <div class="m-6 flex h-auto items-center justify-center font-mono text-[#e0e1dd]">
    <div class="h-auto min-h-0 w-[80%] shadow-2xl shadow-black">
      <div
        class="max-w-8xl flex h-auto w-full flex-wrap justify-between gap-6 rounded-lg p-6 shadow-lg backdrop-blur-lg">
        <div class="rounded-2xl bg-[#0d1b2a] p-3">
          <div class="w-full max-w-3xl rounded-lg bg-[#1b263b] p-6 shadow-md text-xl">
            <h2 class="mb-4 text-lg font-semibold">TEACHER DETAILS</h2>
            <form>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label class="block ">Name</label>
                  <div class="flex gap-2">
                    <input type="text" placeholder="First Name" class="w-1/2 p-2 border rounded-md">
                    <input type="text" placeholder="Last Name" class="w-1/2 p-2 border rounded-md">
                  </div>
                </div>
                <div>
                  <label class="block ">Subjects to Teach</label>
                  <select class="w-full p-2 border rounded-md bg-[#1b263b]">
                    <option>Please choose a department</option>
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Computer Science</option>
                    <option>English</option>
                    <option>History</option>
                    <option>Geography</option>
                  </select>
                  <input type="text" placeholder="Or enter a custom subject" class="w-full p-2 border rounded-md mt-2">
                </div>

                <div class="col-span-2">
                  <label class="block">Email Address</label>
                  <input type="email" class="w-full p-2 border rounded-md">
                </div>
                <div>
                  <label class="block ">Mobile Phone</label>
                  <input type="text" class="w-full p-2 border rounded-md">
                </div>
                <div>
                  <label class="block ">Office Phone</label>
                  <input type="text" class="w-full p-2 border rounded-md">
                </div>
                <div class="col-span-2">
                  <label class="block ">Address</label>
                  <input type="text" placeholder="Street Address" class="w-full p-2 border rounded-md mb-2">
                  <input type="text" placeholder="Address Line 2" class="w-full p-2 border rounded-md mb-2">
                  <div class="grid grid-cols-3 gap-2">
                    <input type="text" placeholder="City" class="p-2 border rounded-md">
                    <input type="text" placeholder="State" class="p-2 border rounded-md">
                    <input type="text" placeholder="Zip Code" class="p-2 border rounded-md">
                  </div>
                </div>
                <div class="col-span-2">
                  <label class="block ">Bio/Notes</label>
                  <textarea class="w-full p-2 border rounded-md"></textarea>
                </div>
              </div>
              <div class="mt-4 flex justify-end gap-2">
                <button
                  class="rounded-md   text-[#8e9baa] hover:bg-[#778da944] active:bg-[#415a77] border cursor-pointer  transition duration-300 active:scale-95 border-[#415a77]  px-4 py-2 hover:text-[#e0e1dd]">Save
                  & Add Another</button>
                <button
                  class="rounded-md   text-[#8e9baa] hover:bg-[#778da944] active:bg-[#415a77] border cursor-pointer  transition duration-300 active:scale-95 border-[#415a77]  px-4 py-2 hover:text-[#e0e1dd]">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
`;