import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-orverlay"
			className="react-modal-content"
		>
			<button
				type="submit"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container>
				<h2>Cadasrtar transação</h2>

				<input type="text" placeholder="Titulo" />

				<input type="number" placeholder="Valor" />

				<input type="text" placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
