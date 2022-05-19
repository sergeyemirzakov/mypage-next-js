import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { storage } from '../lib/utils/storage';
import { createArticle } from '../lib/api/articles';
import { GrClose } from 'react-icons/gr';
import Spinner from '../components/preloaders/Spinner';
import DialogModal from '../components/forms/DialogModal';
import { ArticleInputs } from '../interfaces/articleForm.interface';

const CreateArticle = () => {
  const router = useRouter();
  const { data: user } = useSWR('user', storage);
  const [tagText, setTagText] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleInputs>();

  const onSumbit: SubmitHandler<ArticleInputs> = async (data) => {
    setIsLoading(true);
    // Make request to create an article
    try {
      const response = await createArticle(
        user.token,
        data.title,
        data.description,
        data.body,
        tags
      );

      if (response?.data.article !== undefined) setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    router.push('/');
  };

  // Display tags and push them to an array
  const addDisplayTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tagText === '') return false;

    if (tags.length < 3) {
      if (e.code === 'Comma' || e.code === 'Space') {
        setTags((prev) => [...prev, tagText]);
        setTagText('');
      }
    }
  };

  // Remove tag
  const removeTag = (tag: string) => {
    const filterItems = tags.filter((item: string) => item !== tag);
    setTags([...filterItems]);
  };

  // Validate tags
  const getTagText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ' ') {
      setTagText(e.target.value.replace(/[\s,',']/g, ''));
    }
  };

  // OnBlur for Tags field
  const onBlurHandler = () => {
    setTags((prev) => [...prev, tagText]);
    setTagText('');
  };

  return (
    <DialogModal>
      <form onSubmit={handleSubmit(onSumbit)}>
        {/* Title */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('title', { required: true })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="title"
            placeholder="Title"
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>
        {/* Description */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('description', { required: true })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="description"
            placeholder="Description"
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>
        {/* Body */}
        <div className="max-w-[400px] mb-2">
          <fieldset>
            <textarea
              {...register('body', { required: true })}
              wrap="hard"
              rows={10}
              cols={50}
              className="p-2 px-3 border 1px solid black w-full"
              name="body"
              placeholder="Body"
            ></textarea>
          </fieldset>
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        {/* ***** TAGS IS HERE ***** */}
        <div className="max-w-[400px] mb-2">
          <p className="text-sm mb-2 text-gray-400">
            You can not add more than 3 tags
          </p>
          <input
            // {...register('tagList')}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="tagList"
            placeholder="Tags"
            value={tagText}
            onChange={getTagText}
            onKeyDown={addDisplayTags}
            onBlur={onBlurHandler}
          />
        </div>
        <div>
          <ul className="flex flex-wrap">
            {!!tags &&
              tags.map((tag, idx) => (
                <li
                  onClick={() => removeTag(tag)}
                  key={tag + idx + tag[0]}
                  className="mr-1 mb-1 text-sm bg-gray-200 py-1 px-2 rounded-md"
                >
                  <span className="flex items-center">
                    <span className="mr-2 cursor-pointer">
                      <GrClose />
                    </span>
                    <span>{tag}</span>
                  </span>
                </li>
              ))}
          </ul>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md"
          >
            {isLoading && (
              <span className="mr-2">
                <Spinner size="20" />
              </span>
            )}
            Create
          </button>
        </div>
      </form>
    </DialogModal>
  );
};

export default CreateArticle;
