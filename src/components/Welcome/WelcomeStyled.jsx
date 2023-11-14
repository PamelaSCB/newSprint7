import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	div {
		background-color: #111;
		width: 100%;
		padding: 4rem 3.25rem;
		border-radius: 10%;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		h1 {
			font-size: 2.5rem;
			text-align: center;
			text-transform: uppercase;
			letter-spacing: 0.15rem;
			font-weight: bold;
		}
		h2 {
			font-size: 1.5rem;
			font-weight: bold;
			line-height: 1.5;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
		}
		div {
			border: none;
			width: 100%;
			padding: 1rem 0 0 0;

			img {
				max-width: 100%;
				object-fit: cover;
				height: 40rem;
			}
		}
		p {
			font-size: 1.5rem;
			line-height: 1.25;
			text-align: justify;
			margin: -1.25rem 1rem 0.5rem;
		}
	}
	button {
		width: 16rem;
		background-color: #111;
		padding: 1rem;
		font-size: 1.5rem;
		color: #eef;
		border: 0.1rem solid transparent;
		border-radius: 2.5rem;
		text-transform: uppercase;
		cursor: pointer;
	}
	button:hover {
		border-color: #cede1e;
	}
`;
