import React from 'react';
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

function Author() {
  return (
      <Container>
        <Header
          title="O autorze"
        />
        <Section
          title="Filip Szumski"
          body={
              <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia dolorum, laboriosam unde maiores ipsum quod atque quis eos vel enim totam consectetur autem. Maxime molestiae libero accusamus eligendi quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maxime vel, itaque officiis id autem vero ea sint quis quidem assumenda nulla eos inventore? In totam ipsum ab ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa doloremque autem asperiores ipsam? Porro eos quas quibusdam aut, voluptas eveniet praesentium ullam ipsam quisquam sapiente reiciendis cupiditate, hic suscipit.
              </>
          }
        />
      </Container>
  );
}

export default Author;