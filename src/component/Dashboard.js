import "./Dashboard.css";
import logo from "../images/Group 185.svg";
import dashboard from "../images/grid-3.png";
import message from "../images/message.png";
import calender from "../images/calculator.png";
import campaign from "../images/flash.png";
import settings from "../images/setting-3.svg";
import help from "../images/danger.png";
import logout from "../images/send-square.png";
import trend from "../images/trend-up.png";
import search from "../images/search-normal.svg";
import calenderblack from "../images/calculatorblack.png";
import down from "../images/arrow-square-down.png";
import notification from "../images/notification-bing.svg";
import Jacob from "../images/Ellipse 4.png";
import Alex from "../images/Ellipse 5.png";
import Mujo from "../images/Ellipse 6.png";
import task from "../images/Group 34151.png";
import pie from "../images/Doughnut.png";
import p1 from "../images/Polygon - 01.png";
import p2 from "../images/Polygon - 02.png";
import p3 from "../images/Polygon - 03.png";
import p4 from "../images/Polygon - 04.png";
import p5 from "../images/Polygon - 05.png";
import p6 from "../images/Polygon - 06.png";
import p7 from "../images/Polygon - 07.png";
import p8 from "../images/Polygon - 08.png";
import s1 from "../images/01.png";
import s2 from "../images/Vector 16.png";
import s3 from "../images/Chart.png";

const Component = () => {
	return (
		<div className='div'>
			<div className='action-parent'>
				<a href='#' className='action'>
					<div className='dashboard'>Dashboard</div>
					<img className='vuesaxlineargrid-3-icon' alt='' src={dashboard} />
				</a>
				<a href='#' className='realply'>
					Realply
				</a>
				<a href='#' className='action1'>
					<div className='dashboard'>Messages</div>
					<img className='vuesaxlinearmessage-icon' alt='' src={message} />
				</a>
				<a href='#' className='action2'>
					<div className='calendar'>Calendar</div>
					<img className='vuesaxlineargrid-3-icon' alt='' src={calender} />
				</a>
				<a href='#' className='action3'>
					<b className='calendar'>Campaigns</b>
					<img className='vuesaxlineargrid-3-icon' alt='' src={campaign} />
				</a>
				<a href='#' className='action4'>
					<div className='calendar'>Settings</div>
					<img className='vuesaxlineargrid-3-icon' alt='' src={settings} />
				</a>
				<a href='#' className='action5'>
					<div className='calendar'>Help?</div>
					<img className='vuesaxlineargrid-3-icon' alt='' src={help} />
				</a>
				<a href='#' className='action6'>
					<div className='log-out'>Log out</div>
					<img className='vuesaxlinearsend-square-icon' alt='' src={logout} />
				</a>
				<img className='frame-child' alt='' src={logo} />
				<div className='frame-item' />
				<div className='frame-parent'>
					<div className='group-parent'>
						<div className='your-free-trial-is-about-to-en-wrapper'>
							<div className='your-free-trial-container'>
								<span className='your-free-trial-container1'>
									<p className='your-free-trial-is-about-to-en'>
										Your free trial is about to end in
										{/* <span className='span'>{` `}</span> */}
									</p>
									<p className='days'>10 days.</p>
								</span>
							</div>
						</div>
						<div className='you-will-not-container'>
							<span className='your-free-trial-container1'>
								<p className='your-free-trial-is-about-to-en'>
									You will not be billed during your free trial.
								</p>
								<p className='your-free-trial-is-about-to-en'>&nbsp;</p>
								<p className='your-free-trial-is-about-to-en'>
									To keep your projects running after the trial end, upgrade to
									a paid option.
								</p>
							</span>
						</div>
					</div>
					<a href='#' className='a-wrapper'>
						<div className='a'>
							<b className='upgrade'>Upgrade</b>
						</div>
					</a>
				</div>
			</div>
			<div className='dashboard-parent'>
				<b className='dashboard1'>Dashboard</b>
				<div className='connections-parent'>
					<b className='connections'>Connections</b>
					<div className='group-child' />
				</div>
				<div className='follows-parent'>
					<b className='follows'>Follows</b>
					<div className='group-item' />
				</div>
				<div className='connect-invites-parent'>
					<b className='connect-invites'>Connect Invites</b>
					<div className='group-inner' />
				</div>
			</div>
			<div>
				<div className='vector-parent'>
					<img className='vector-icon' alt='' src='/vector-1.svg' />
					<div className='group-container'>
						<div className='group-wrapper'>
							<div className='group-frame'>
								<div className='group-frame'>
									<div className='group-frame'>
										<div className='div1'>2632</div>
									</div>
								</div>
							</div>
						</div>
						<div className='followers'>Connections</div>
						<div className='parent'>
							<b className='b'>56%</b>
							<img className='vuesaxlineartrend-up-icon' alt='' src={trend} />
						</div>
					</div>
					<div className='h_line1'></div>
				</div>
			</div>

			<div className='group-parent1'>
				<div className='group-wrapper1'>
					<div className='container'>
						<div className='container'>
							<div className='container'>
								<div className='div2'>286</div>
							</div>
						</div>
					</div>
				</div>
				<div className='invitations-sent'>Invitations sent</div>
			</div>
			<div className='group-parent2'>
				<div className='group-wrapper4'>
					<div className='frame'>
						<div className='frame'>
							<div className='frame'>
								<div className='div3'>12</div>
							</div>
						</div>
					</div>
				</div>
				<div className='invitations-sent'>Pending Invitations</div>
			</div>
			<div className='group-parent3'>
				<div className='group-wrapper7'>
					<div className='group-wrapper8'>
						<div className='group-wrapper8'>
							<div className='group-wrapper8'>
								<div className='div4'>2891</div>
							</div>
						</div>
					</div>
				</div>
				<div className='invitations-sent'>Profile views</div>
			</div>
			<div className='vector-group'>
				<div className='group-container'>
					<div className='group-wrapper10'>
						<div className='group-wrapper11'>
							<div className='group-wrapper11'>
								<div className='group-wrapper11'>
									<div className='div5'>2667</div>
								</div>
							</div>
						</div>
					</div>
					<div className='followers'>Followers</div>
					<div className='parent'>
						<b className='b1'>0%</b>
						<img className='vuesaxlineartrend-up-icon' alt='' src={trend} />
					</div>
					<div className='h_line1'></div>
				</div>
			</div>

			<div className='inner'>
				<div className='group-container'>
					<div className='group-wrapper13'>
						<div className='group-wrapper14'>
							<div className='group-wrapper14'>
								<div className='group-wrapper14'>
									<div className='div6'>100</div>
								</div>
							</div>
						</div>
					</div>

					<div className='followers'>Connect Invites</div>

					<div className='parent'>
						<b className='b2'>60%</b>
						<img className='vuesaxlineartrend-up-icon' alt='' src={trend} />
					</div>
				</div>
			</div>
			<div className='child'>
				<div className='line-parent'>
					<div className='line-div' />
					<div className='group-child2' />
					<div className='group-child3' />
					<div className='group-child4' />
					<div className='group-child5' />
					<div className='group-child6' />
					<div className='group-child7' />
					<div className='group-child8' />
					<div className='group-child9' />
					<div className='rectangle-div' />
					<div className='group-child10' />
					<div className='group-child11' />
					<div className='div7'>0</div>
					<div className='div8'>100</div>
					<div className='div9'>200</div>
					<div className='div10'>300</div>
					<div className='div11'>400</div>
					<div className='div12'>500</div>
					<div className='div13'>600</div>
					<div className='div14'>700</div>
					<div className='div15'>800</div>
					<div className='group-child12' />
				</div>
			</div>
			<div className='recent-activity-parent'>
				<b className='recent-activity'>Recent Activity</b>
				<div className='alex-morgan-sent-container'>
					<div>
						<b>{`Alex Morgan `}</b>
						<span>sent you a</span>
						<b> message.</b>
					</div>
				</div>
				<div className='h_line2'></div>

				<div className='mujo-prosper-sent-container'>
					<b>{`Mujo Prosper `}</b>
					<span>sent you a</span>
					<b> connection request.</b>
				</div>
				<div className='h_line3'></div>
				<div className='upcoming-task-container'>
					<span>Upcoming Task</span>
					<b>{` - Create a campaign for designers `}</b>
					<span>due on</span>
					<b> 02/04/2023.</b>
				</div>
				<img className='frame-inner' alt='' src={Alex} />
				<img className='ellipse-icon' alt='' src={Mujo} />
				<img className='frame-child1' alt='' src={task} />
				{/* <img className='frame-child2' alt='' src='/vector-11.svg' /> */}
				{/* <img className='frame-child3' alt='' src='/vector-11.svg' /> */}
				<a href='#' className='h-parent'>
					<b className='h'>24h</b>
					<div className='last'>Last</div>
					<img
						className='vuesaxlineararrow-square-dow-icon'
						alt=''
						src={down}
					/>
				</a>
				<div className='scrollbar' />
			</div>
			<b className='campaign-analytics'>Campaign Analytics</b>
			<a href='#' className='group-parent6'>
				<div className='jacob-frost-wrapper'>
					<b className='jacob-frost'>Jacob Frost</b>
				</div>
				<img className='group-child13' alt='' src={Jacob} />
				<img className='vuesaxlineararrow-square-dow-icon1' alt='' src={down} />
			</a>
			<a href='#'>
				<img
					className='item'
					alt=''
					src={notification}
					style={{ marginTop: "10px" }}
				/>
			</a>

			<div className='chart-parent'>
				<div className='chart'>
					<img className='polygon-01' alt='' src={p1} />
					<img className='polygon-02' alt='' src={p2} />
					<img className='polygon-03' alt='' src={p3} />
					<img className='polygon-04' alt='' src={p4} />
					<img className='polygon-05' alt='' src={p5} />
					<img className='polygon-06' alt='' src={p6} />
					<img className='polygon-07' alt='' src={p7} />
					<img className='polygon-08' alt='' src={p8} />
					{/* <img className="chart-child" alt="" src={s3}/> */}
					<div className='april'>April</div>
					<div className='may'>May</div>
					<div className='june'>June</div>
					<div className='july'>July</div>
					<div className='january'>January</div>
					<div className='february'>February</div>
					<div className='march'>March</div>
					<div className='number-01'>
						<div className='div16'>10</div>
					</div>
					<div className='number-02'>
						<div className='div16'>20</div>
					</div>
					<div className='number-03'>
						<div className='div16'>30</div>
					</div>
					<div className='number-04'>
						<div className='div16'>40</div>
					</div>
					<div className='number-05'>
						<div className='div16'>50</div>
					</div>
					<div className='number-06'>
						<div className='div16'>60</div>
					</div>
					<div className='number-07'>
						<div className='div16'>70</div>
					</div>
					<div className='number-08'>
						<div className='div16'>80</div>
					</div>
					<div className='number-09'>
						<div className='div16'>90</div>
					</div>
					<img className='icon' alt='' src={s1} />
					<img className='bullet-icon' alt='' src='/bullet.svg' />
					<img className='bullet-icon1' alt='' src={"/bullet1.svg"} />
					<img className='bullet-icon2' alt='' src='/bullet2.svg' />
					<img className='bullet-icon3' alt='' src='/bullet3.svg' />
					<img className='bullet-icon4' alt='' src='/bullet4.svg' />
					<img className='bullet-icon5' alt='' src='/bullet5.svg' />
					<img className='bullet-icon6' alt='' src='/bullet6.svg' />
					<img className='chart-item' alt='' src={s2} />
					<img className='bullet-icon7' alt='' src='/bullet7.svg' />
					<img className='bullet-icon8' alt='' src='/bullet8.svg' />
					<img className='bullet-icon9' alt='' src='/bullet9.svg' />
					<img className='bullet-icon10' alt='' src='/bullet10.svg' />
					<img className='bullet-icon11' alt='' src='/bullet11.svg' />
					<img className='bullet-icon12' alt='' src='/bullet12.svg' />
					<img className='bullet-icon13' alt='' src='/bullet13.svg' />
				</div>
				<div className='info'>
					<div className='data-01'>
						<div className='bullet'>
							<div className='bullet-child' />
						</div>
						<div className='txt'>
							<div className='campaign-1'>Campaign 1</div>
							<div className='data'>
								<div className='campaign-1'>12,423</div>
							</div>
						</div>
					</div>
					<div className='data-02'>
						<div className='bullet'>
							<div className='bullet-item' />
						</div>
						<div className='txt'>
							<div className='campaign-1'>Campaign 2</div>
							<div className='data'>
								<div className='campaign-1'>12,423</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='doughnut-parent'>
				<img className='doughnut-icon' alt='' src={pie} />
				<div className='info1'>
					<div className='data-011'>
						<div className='bullet'>
							<div className='bullet-inner' />
						</div>
						<div className='txt'>
							<div className='campaign-1'>Invitations sent</div>
							<div className='data'>
								<div className='campaign-1'>286</div>
							</div>
						</div>
					</div>
					<div className='data-021'>
						<div className='bullet'>
							<div className='bullet-child1' />
						</div>
						<div className='txt'>
							<div className='campaign-1'>Pending invitations</div>
							<div className='data'>
								<div className='campaign-1'>12</div>
							</div>
						</div>
					</div>
					<div className='data-03'>
						<div className='bullet'>
							<div className='bullet-child2' />
						</div>
						<div className='txt'>
							<div className='campaign-1'>Profile views</div>
							<div className='data'>
								<div className='campaign-1'>2891</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mar-10-apr-10-parent'>
				<div className='mar-10-'>Mar 10 - Apr 10</div>
				<a href='#'>
					<img
						className='vuesaxlineararrow-square-dow-icon2'
						alt=''
						src={down}
					/>
				</a>
				<a href='#'>
					<img
						className='vuesaxlinearcalculator-icon1'
						alt=''
						src={calenderblack}
					/>
				</a>
			</div>
			<div className='search-parent'>
				<input
					type='text'
					id='lname'
					name='lname'
					placeholder='Search'
					className='search-input'
				/>
				{/* <span className='search'>Search</span> */}
				{/* <a href='#'> */}
				<img className='vuesaxlinearsearch-normal-icon' alt='' src={search} />
				{/* </a> */}
			</div>
		</div>
	);
};

export default Component;
