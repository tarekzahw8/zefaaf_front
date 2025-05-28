import { Link } from 'react-router-dom';
import { FaUser, FaCogs, FaCreditCard, FaPlus, FaMinus, FaImage } from 'react-icons/fa'; // استيراد الأيقونات

const UserSettingSection = () => {
  return (
    <section className="user-setting-section py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/5 xl:w-1/4">
            <div className="accordion" id="accordionExample">
              <div className="card mb-4">
                <div className="card-header" id="headingOne">
                  <button
                    className="flex justify-between items-center w-full text-left p-3 bg-gray-200 rounded focus:outline-none"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>My Profile</span>
                    </div>
                    <div className="t-icon">
                      <FaPlus />
                      <FaMinus />
                    </div>
                  </button>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body bg-white p-4 rounded">
                    <ul className="links">
                      <li>
                        <Link className="active" to="/profile-info">Profile Info</Link>
                      </li>
                      <li>
                        <Link to="/user-notification">Notifications</Link>
                      </li>
                      <li>
                        <Link to="/user-friend-request">Friend Requests</Link>
                      </li>
                      <li>
                        <Link to="/user-badges">Badges</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header" id="headingTwo">
                  <button
                    className="flex justify-between items-center w-full text-left p-3 bg-gray-200 rounded focus:outline-none"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div className="flex items-center">
                      <FaCogs className="mr-2" />
                      <span>Account</span>
                    </div>
                    <div className="t-icon">
                      <FaPlus />
                      <FaMinus />
                    </div>
                  </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body bg-white p-4 rounded">
                    <ul className="links">
                      <li>
                        <Link to="/user-account-info">Account Info</Link>
                      </li>
                      <li>
                        <Link to="/user-change-pass">Change Password</Link>
                      </li>
                      <li>
                        <Link to="/user-privacy-setting">Privacy Settings</Link>
                      </li>
                      <li>
                        <Link to="/user-verify-account">Verified account</Link>
                      </li>
                      <li>
                        <Link to="/user-close-account">Close Account</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header" id="headingThree">
                  <button
                    className="flex justify-between items-center w-full text-left p-3 bg-gray-200 rounded focus:outline-none"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="flex items-center">
                      <FaCreditCard className="mr-2" />
                      <span>Subscriptions & Payments</span>
                    </div>
                    <div className="t-icon">
                      <FaPlus />
                      <FaMinus />
                    </div>
                  </button>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body bg-white p-4 rounded">
                    <ul className="links">
                      <li>
                        <Link to="/user-billing">Billing & Payout</Link>
                      </li>
                      <li>
                        <Link to="/user-plan">Upgrade Membership Plan</Link>
                      </li>
                      <li>
                        <Link to="/user-purchase">View Purchase History</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 xl:w-3/4">
            <div className="page-title text-2xl font-bold mb-6">Profile Info</div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6">
                <div className="profile-about-box relative">
                  <div className="top-bg"></div>
                  <div className="p-inner-content">
                    <div className="profile-img">
                      <img src="assets/images/profile/profile-user.png" alt="Profile" />
                      <div className="active-online"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mb-6">
                <div className="up-photo-card mb-6 flex items-center p-4 border rounded bg-gray-100">
                  <div className="icon mr-4">
                    <FaUser />
                  </div>
                  <div className="content">
                    <h4 className="font-bold">Change Avatar</h4>
                    <span>120x120p size minimum</span>
                  </div>
                </div>
                <div className="up-photo-card flex items-center p-4 border rounded bg-gray-100">
                  <div className="icon mr-4">
                    <FaImage />
                  </div>
                  <div className="content">
                    <h4 className="font-bold">Change Cover</h4>
                    <span>1200x300p size minimum</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="input-info-box mt-6">
              <div className="header text-xl font-semibold mb-4">About your Profile</div>
              <div className="content">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="profileName">Profile Name</label>
                      <input type="text" id="profileName" placeholder="Profile Name" className="border rounded p-2 w-full" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="publicEmail">Public Email</label>
                      <input type="text" id="publicEmail" placeholder="Public Email" className="border rounded p-2 w-full" />
                    </div>
                  </div>
                  <div className="w-full mb-4">
                    <div className="my-input-box">
                      <textarea placeholder="Write a little description about you..." className="border rounded p-2 w-full" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="country">Country</label>
                      <select id="country" className="border rounded p-2 w-full">
                        <option value="" disabled selected>Select Country</option>
                        <option value="">United States</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="city">City</label>
                      <select id="city" className="border rounded p-2 w-full">
                        <option value="" disabled selected>Select City</option>
                        <option value="">New York</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="birthDate">Date of Birth</label>
                      <input type="date" id="birthDate" className="border rounded p-2 w-full" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <div className="my-input-box">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input type="text" id="contactNumber" placeholder="Contact Number" className="border rounded p-2 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSettingSection;
