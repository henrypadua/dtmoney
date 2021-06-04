import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer Website',
					type: 'deposit',
					category: 'dev',
					amount: 2500,
					createdAt: new Date('2021-02-12 09:10:00')
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'casa',
					amount: 5000,
					createdAt: new Date('2021-02-05 19:10:00')
				},
			]
		})
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all('transaction')
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
