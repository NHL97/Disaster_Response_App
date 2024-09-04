import { useState } from "react";
import Posts from "../../components/utils/common/Posts";
import CreatePost from "./CreatePost";
import { Container, Row, Col } from "react-bootstrap";
import './PostHomePage.css';

const PostHomePage = () => {
	const [feedType, setFeedType] = useState("forYou");

	return (
		<Container fluid id="post-container">
			<Row className="justify-content-center mb-4">
				<Col xs={12} className="text-center">
					<h1 className="display-4"><b>Community Posts</b></h1>
					<p className="lead" style={{
						color: '#6c757d', // Light grey color
						backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light semi-transparent background
						padding: '0.5rem',
						borderRadius: '5px'
					}}>
						Share your thoughts, create posts, and engage with others.
					</p>
				</Col>
			</Row>
			<div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
				{/* Header */}
				<div className='flex w-full border-b border-gray-700'>
					<div
						className={
							"flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
						}
						onClick={() => setFeedType("forYou")}
					>
						For you
						{feedType === "forYou" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
					<div
						className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
						onClick={() => setFeedType("following")}
					>
						Following
						{feedType === "following" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
				</div>

				{/*  CREATE POST INPUT */}
				<CreatePost />

				{/* POSTS */}
				<Posts />
			</div>
		</Container>
	);
};
export default PostHomePage;