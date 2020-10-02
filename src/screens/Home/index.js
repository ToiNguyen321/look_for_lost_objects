import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { SearchInput } from 'components'
import HomeItem from 'components/Home/HomeItem'

const dataExample = [
    {
        id: 0,
        full_name: 'Nguyễn Văn Trỗi',
        created_at: '30/08/2020',
        address: 'Hoàng Mai, Hà Nội',
        title: 'Culpa velit laboris ipsum do officia adipisicing proident laboris fugiat sit anim ipsum dolor eu.',
        descriptions: `Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.`,
        content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`
    },
    {
        id: 1,
        full_name: 'Nguyễn Văn Trỗi',
        created_at: '30/08/2020',
        address: 'Hoàng Mai, Hà Nội',
        title: 'Culpa velit laboris ipsum do officia adipisicing proident laboris fugiat sit anim ipsum dolor eu.',
        descriptions: `Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.
        Consequat et consectetur incididunt irure. Ad mollit esse occaecat duis do deserunt ullamco nulla culpa aliquip deserunt aliqua. Non excepteur Lorem ullamco culpa consectetur occaecat consectetur deserunt. Voluptate magna irure voluptate incididunt nulla amet irure. Enim ipsum exercitation velit nostrud enim est consequat aliqua laboris cillum. Ullamco officia labore adipisicing ipsum nostrud laborum minim tempor occaecat reprehenderit. Laborum dolore enim nulla cupidatat ullamco fugiat.`,
        content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`
    
    },
    {
        id: 2,
        full_name: 'Nguyễn Văn Trỗi',
        created_at: '30/08/2020',
        address: 'Hoàng Mai, Hà Nội',
        title: 'Incididunt nisi cupidatat fugiat consectetur elit cillum.',
        descriptions: `Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.
        Consequat et consectetur incididunt irure. Ad mollit esse occaecat duis do deserunt ullamco nulla culpa aliquip deserunt aliqua. Non excepteur Lorem ullamco culpa consectetur occaecat consectetur deserunt. Voluptate magna irure voluptate incididunt nulla amet irure. Enim ipsum exercitation velit nostrud enim est consequat aliqua laboris cillum. Ullamco officia labore adipisicing ipsum nostrud laborum minim tempor occaecat reprehenderit. Laborum dolore enim nulla cupidatat ullamco fugiat.`,
        content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`
    },
    
]
export default function Home() {

    const renderItem = ({ item, index }) => {
        return <HomeItem item={item} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput style={{ marginHorizontal: 15, marginBottom: 15 }} />
            <FlatList
                contentContainerStyle={styles.flatListContent}
                data={dataExample}
                renderItem={renderItem}
                keyExtractor={i => `${i.id}`}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    flatListContent: { flexGrow: 1, backgroundColor: '#fff' }
})
