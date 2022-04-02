import styled from "@emotion/styled"
import Image from "material-ui-image"
export const CarouselItem = () => {
  return (
    <StyledContainer>
      <Image
        cover
        aspectRatio={16 / 9}
        src="https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/12/509541.jpg"
      />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: #f00;
`
