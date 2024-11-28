import React from 'react';

import { TextComponent } from '../../../_components/IndexComponents';

import { BedDouble, User } from 'lucide-react';

import styles from '../product.module.scss';

const ProductMoreInfo = ({ product }) => {
  return (
    <table className={styles.product__info_bottom_info_house__table_col}>
      <thead>
        <tr>
          <th scope="col" colSpan={4}>
            <TextComponent text={'Дополнительная информация'} size="lg" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <TextComponent
              text={`${product.persons_info.sleeping_places} спальных мест`}
              icon={<BedDouble />}
              size="sm"
            />
          </td>
          <td>
            <TextComponent
              text={`${product.persons_info.count_bedrooms} спален`}
              icon={<BedDouble />}
              size="sm"
            />
          </td>
          <td>
            <TextComponent
              text={`до ${product.persons_info.max_persons} человек`}
              icon={<User />}
              size="sm"
            />
          </td>
          <td>
            <TextComponent text={`Еще что-то`} icon={<User />} size="sm" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductMoreInfo;
