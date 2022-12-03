import { useState, useEffect } from "react";
import { Root, TooltipText, AvatarItem } from "./SelectAvatar.styles";
import foto from "../../assets/Avatar.png";

const SelectAvatar = () => {

	
	const data = [
		{
			nombre: "Franco",
			avatar: foto,
			selected: true
		},
		{
			nombre: "Lautaro",
			avatar: foto,
			selected: false
		},
		{
			nombre: "Bruno",
			avatar: foto,
			selected: false
		},
	];
	
	const [stateData, setStateData ] = useState(data);

	useEffect(() => {

		console.log("Prendio");

	}, [stateData])
	

	const handleSelect = ( e ) => {

		stateData.find((element, index ) => {

			if(element.nombre === e.target.alt){
				element.selected = !element.selected



			}
		})
	};

	return (
		<Root>
			{stateData.map(( index , item ) => (
				<TooltipText key={item} title={index.nombre}>
					<AvatarItem
						onClick={handleSelect}
						selected={index.selected}
						alt={index.nombre}
						src={index.avatar}
					/>
				</TooltipText>
			))}
		</Root>
	);
};

export default SelectAvatar;
