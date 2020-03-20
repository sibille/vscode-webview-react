echo "build client"
echo "----------------"
yarn --cwd client install

yarn --cwd client build

echo "build extension"
echo "----------------"
yarn --cwd ext install

yarn --cwd ext build
