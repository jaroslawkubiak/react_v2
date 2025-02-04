import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button secondary rounded onClick={handleModalClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleModalClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        OpenModal
      </Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et arcu
        at purus scelerisque sodales ornare non velit. Sed commodo lacus vitae
        sapien venenatis pulvinar. Sed viverra sit amet tortor eget efficitur.
        Nunc ac ultricies turpis, et laoreet nibh. Integer eu lectus vel odio
        pulvinar condimentum vitae nec nibh. Quisque vitae mollis arcu. Ut non
        nisl posuere, pharetra est in, semper tellus. Nulla non lacinia nunc.
        Quisque blandit ultrices quam ac feugiat. Curabitur placerat tempor
        lorem, et tempor mi rutrum nec. Vestibulum vulputate ac dolor in
        ullamcorper. Phasellus non cursus orci, id interdum leo. Morbi maximus
        vehicula orci sit amet ullamcorper. Aliquam vestibulum, felis vel
        euismod faucibus, orci elit finibus lacus, sit amet lobortis augue ipsum
        sed nulla. Donec non odio bibendum, congue leo eget, posuere tellus.
        Morbi pellentesque pharetra ipsum, quis pellentesque tellus vehicula
        sed. Phasellus eget eros et tortor ultrices semper id id metus. Nulla
        pretium eget orci non consequat. Sed nunc enim, efficitur vel risus vel,
        lacinia consequat augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et arcu
        at purus scelerisque sodales ornare non velit. Sed commodo lacus vitae
        sapien venenatis pulvinar. Sed viverra sit amet tortor eget efficitur.
        Nunc ac ultricies turpis, et laoreet nibh. Integer eu lectus vel odio
        pulvinar condimentum vitae nec nibh. Quisque vitae mollis arcu. Ut non
        nisl posuere, pharetra est in, semper tellus. Nulla non lacinia nunc.
        Quisque blandit ultrices quam ac feugiat. Curabitur placerat tempor
        lorem, et tempor mi rutrum nec. Vestibulum vulputate ac dolor in
        ullamcorper. Phasellus non cursus orci, id interdum leo. Morbi maximus
        vehicula orci sit amet ullamcorper. Aliquam vestibulum, felis vel
        euismod faucibus, orci elit finibus lacus, sit amet lobortis augue ipsum
        sed nulla. Donec non odio bibendum, congue leo eget, posuere tellus.
        Morbi pellentesque pharetra ipsum, quis pellentesque tellus vehicula
        sed. Phasellus eget eros et tortor ultrices semper id id metus. Nulla
        pretium eget orci non consequat. Sed nunc enim, efficitur vel risus vel,
        lacinia consequat augue.
      </p>
      <Button onClick={handleClick} primary>
        OpenModal
      </Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et arcu
        at purus scelerisque sodales ornare non velit. Sed commodo lacus vitae
        sapien venenatis pulvinar. Sed viverra sit amet tortor eget efficitur.
        Nunc ac ultricies turpis, et laoreet nibh. Integer eu lectus vel odio
        pulvinar condimentum vitae nec nibh. Quisque vitae mollis arcu. Ut non
        nisl posuere, pharetra est in, semper tellus. Nulla non lacinia nunc.
        Quisque blandit ultrices quam ac feugiat. Curabitur placerat tempor
        lorem, et tempor mi rutrum nec. Vestibulum vulputate ac dolor in
        ullamcorper. Phasellus non cursus orci, id interdum leo. Morbi maximus
        vehicula orci sit amet ullamcorper. Aliquam vestibulum, felis vel
        euismod faucibus, orci elit finibus lacus, sit amet lobortis augue ipsum
        sed nulla. Donec non odio bibendum, congue leo eget, posuere tellus.
        Morbi pellentesque pharetra ipsum, quis pellentesque tellus vehicula
        sed. Phasellus eget eros et tortor ultrices semper id id metus. Nulla
        pretium eget orci non consequat. Sed nunc enim, efficitur vel risus vel,
        lacinia consequat augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et arcu
        at purus scelerisque sodales ornare non velit. Sed commodo lacus vitae
        sapien venenatis pulvinar. Sed viverra sit amet tortor eget efficitur.
        Nunc ac ultricies turpis, et laoreet nibh. Integer eu lectus vel odio
        pulvinar condimentum vitae nec nibh. Quisque vitae mollis arcu. Ut non
        nisl posuere, pharetra est in, semper tellus. Nulla non lacinia nunc.
        Quisque blandit ultrices quam ac feugiat. Curabitur placerat tempor
        lorem, et tempor mi rutrum nec. Vestibulum vulputate ac dolor in
        ullamcorper. Phasellus non cursus orci, id interdum leo. Morbi maximus
        vehicula orci sit amet ullamcorper. Aliquam vestibulum, felis vel
        euismod faucibus, orci elit finibus lacus, sit amet lobortis augue ipsum
        sed nulla. Donec non odio bibendum, congue leo eget, posuere tellus.
        Morbi pellentesque pharetra ipsum, quis pellentesque tellus vehicula
        sed. Phasellus eget eros et tortor ultrices semper id id metus. Nulla
        pretium eget orci non consequat. Sed nunc enim, efficitur vel risus vel,
        lacinia consequat augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et arcu
        at purus scelerisque sodales ornare non velit. Sed commodo lacus vitae
        sapien venenatis pulvinar. Sed viverra sit amet tortor eget efficitur.
        Nunc ac ultricies turpis, et laoreet nibh. Integer eu lectus vel odio
        pulvinar condimentum vitae nec nibh. Quisque vitae mollis arcu. Ut non
        nisl posuere, pharetra est in, semper tellus. Nulla non lacinia nunc.
        Quisque blandit ultrices quam ac feugiat. Curabitur placerat tempor
        lorem, et tempor mi rutrum nec. Vestibulum vulputate ac dolor in
        ullamcorper. Phasellus non cursus orci, id interdum leo. Morbi maximus
        vehicula orci sit amet ullamcorper. Aliquam vestibulum, felis vel
        euismod faucibus, orci elit finibus lacus, sit amet lobortis augue ipsum
        sed nulla. Donec non odio bibendum, congue leo eget, posuere tellus.
        Morbi pellentesque pharetra ipsum, quis pellentesque tellus vehicula
        sed. Phasellus eget eros et tortor ultrices semper id id metus. Nulla
        pretium eget orci non consequat. Sed nunc enim, efficitur vel risus vel,
        lacinia consequat augue.
      </p>
    </div>
  );
}
