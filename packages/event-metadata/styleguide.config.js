/* eslint-disable */

const path = require('path');
const { resolver: { findAllComponentDefinitions } } = require('react-docgen');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfig = require('./webpack.prod.js');

module.exports = {
  title: 'Colony UI Style Guide',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper.tsx'),
  },
  resolver: findAllComponentDefinitions,
  webpackConfig,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    // Terser doesn't like our environment - match it with our webpack config
    webpackConfig.optimization.minimizer = [new TerserPlugin()];
    return webpackConfig
  },
  sections: [
    {
      name: 'Component conventions',
      content: 'docs/Components.md',
    },
    {
      name: 'Typography',
      components: [
        './src/modules/core/components/ExpandedParagraph/ExpandedParagraph.tsx',
        './src/modules/core/components/Heading/Heading.tsx',
        './src/modules/core/components/Paragraph/Paragraph.tsx',
      ],
    },
    {
      name: 'Buttons & Links',
      components: [
        './src/modules/core/components/Button/Button.tsx',
        './src/modules/core/components/Button/IconButton.tsx',
        './src/modules/core/components/ExternalLink/ExternalLink.tsx',
        './src/modules/core/components/Link/Link.tsx',
        './src/modules/core/components/NavLink/NavLink.tsx',
        './src/modules/core/components/TokenLink/TokenLink.tsx',
        './src/modules/core/components/TransactionLink/TransactionLink.tsx',
        './src/modules/core/components/WalletLink/WalletLink.tsx',
      ],
    },
    {
      name: 'Forms',
      components: [
        './src/modules/core/components/Fields/Checkbox/Checkbox.tsx',
        './src/modules/core/components/Fields/FieldSet/FieldSet.tsx',
        './src/modules/core/components/Fields/Form/ActionForm.tsx',
        './src/modules/core/components/Fields/Form/Form.tsx',
        './src/modules/core/components/Fields/FormStatus/FormStatus.tsx',
        './src/modules/core/components/Fields/InlineEdit/MultiLineEdit/MultiLineEdit.tsx',
        './src/modules/core/components/Fields/InlineEdit/SingleLineEdit/SingleLineEdit.tsx',
        './src/modules/core/components/Fields/Input/Input.tsx',
        './src/modules/core/components/Fields/Input/InputComponent.tsx',
        './src/modules/core/components/Fields/InputLabel/InputLabel.tsx',
        './src/modules/core/components/Fields/InputStatus/InputStatus.tsx',
        './src/modules/core/components/Fields/Radio/Radio.tsx',
        './src/modules/core/components/Fields/RadioGroup/RadioGroup.tsx',
        './src/modules/core/components/Fields/Select/Select.tsx',
        './src/modules/core/components/Fields/Textarea/Textarea.tsx',
        './src/modules/core/components/Fields/Textarea/TextareaAutoresize.tsx',
        './src/modules/core/components/FileUpload/FileUpload.tsx',
        './src/modules/core/components/MnemonicGenerator/MnemonicGenerator.tsx',
      ],
      content: 'docs/Forms.md',
    },
    {
      name: 'Images and Icons',
      components: [
        './src/modules/core/components/AvatarUploader/AvatarUploader.tsx',
        './src/modules/core/components/Badge/Badge.tsx',
        './src/modules/core/components/ColonyAvatar/ColonyAvatar.tsx',
        './src/modules/core/components/Icon/Icon.tsx',
        './src/modules/core/components/QRCode/QRCode.tsx',
        './src/modules/core/components/UserAvatar/UserAvatar.tsx',
      ],
    },
    {
      name: 'Data Display',
      components: [
        './src/modules/core/components/Assignment/Assignment.tsx',
        './src/modules/core/components/BreadCrumb/BreadCrumb.tsx',
        './src/modules/core/components/Card/Card.tsx',
        './src/modules/core/components/CardList/CardList.tsx',
        './src/modules/core/components/ClipboardCopy/ClipboardCopy.tsx',
        './src/modules/core/components/CopyableAddress/CopyableAddress.tsx',
        './src/modules/core/components/Duration/Duration.tsx',
        './src/modules/core/components/EthUsd/EthUsd.tsx',
        './src/modules/core/components/GroupList/GroupList.tsx',
        './src/modules/core/components/InfoPopover/InfoPopover.tsx',
        './src/modules/core/components/ItemsList/ItemsList.tsx',
        './src/modules/core/components/ListGroup/ListGroup.tsx',
        './src/modules/core/components/MaskedAddress/MaskedAddress.tsx',
        './src/modules/core/components/Numeral/Numeral.tsx',
        './src/modules/core/components/Panel/Panel.tsx',
        './src/modules/core/components/PayoutsList/PayoutsList.tsx',
        './src/modules/core/components/StarRating/StarRating.tsx',
        './src/modules/core/components/Table/Table.tsx',
        './src/modules/core/components/Tabs/Tabs.tsx',
        './src/modules/core/components/Tag/Tag.tsx',
        './src/modules/core/components/TimeRelative/TimeRelative.tsx',
        './src/modules/core/components/UserMention/UserMention.tsx',
      ],
    },
    {
      name: 'Navigation',
      components: [
        './src/modules/core/components/DropdownMenu/DropdownMenu.tsx',
      ],
    },
    {
      name: 'Comboboxes / Pickers',
      components: [
        './src/modules/core/components/DatePicker/DatePicker.tsx',
        './src/modules/core/components/OmniPicker/OmniPicker.tsx',
        './src/modules/core/components/SingleUserPicker/SingleUserPicker.tsx',
      ],
    },
    {
      name: 'Feedback',
      components: [
        './src/modules/core/components/ActivityBar/ActivityBar.tsx',
        './src/modules/core/components/Alert/Alert.tsx',
        './src/modules/core/components/Dialog/ConfirmDialog.tsx',
        './src/modules/core/components/Dialog/Dialog.tsx',
        './src/modules/core/components/Dialog/DialogProvider.tsx',
        './src/modules/core/components/Dialog/DialogSection.tsx',
        './src/modules/core/components/Modal/Modal.tsx',
        './src/modules/core/components/Popover/Popover.tsx',
        './src/modules/core/components/Popover/Tooltip.tsx',
        './src/modules/core/components/Preloaders/DotsLoader.tsx',
        './src/modules/core/components/Preloaders/SpinnerLoader.tsx',
        './src/modules/core/components/ProgressBar/ProgressBar.tsx',
        './src/modules/core/components/ProgressBar/StepBar.tsx',
      ],
    },
    {
      name: 'Wizard',
      components: ['./src/modules/core/components/DecisionHub/DecisionHub.tsx'],
    },
  ],
};
