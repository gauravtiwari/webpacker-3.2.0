const removeOuterSlashes = string =>
   string.replace(/^\/*/, '').replace(/\/*$/, '')

__webpack_public_path__ = `${removeOuterSlashes(process.env.WEBPACKER_ASSET_HOST)}/packs`
